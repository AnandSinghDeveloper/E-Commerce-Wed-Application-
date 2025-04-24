const Address = require("../../models/Address");

const addAddress = async (req, res) => {
  try {
    const {
      name,
      address,
      city,
      state,
      Pincode,
      country,
      phone,
      email,
      userId,
    } = req.body;
    if (
      !name ||
      !address ||
      !city ||
      !state ||
      !Pincode ||
      !country ||
      !phone ||
      !email ||
      !userId
    ) {
      res.status(400).json({
        success: false,
        message: "Please provide all the required fields",
      });
    }

    const Newaddress = new Address({
      name,
      address,
      city,
      state,
      Pincode,
      country,
      phone,
      email,
      userId,
    });

    await Newaddress.save();

    res.status(200).json({
      success: true,
      message: "Address added successfully",
      data: Newaddress,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const fetchAddress = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      res.status(400).json({
        success: false,
        message: "Please provide userId",
      });
    }

    const addressList = await Address.find({ userId });

    if (!addressList) {
      res.status(404).json({
        success: false,
        message: "Address not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Address fetched successfully",
      data: addressList,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const updateAddress = async (req, res) => {
  try {
    const { userId, addressId } = req.params;

    const FormData = req.body;

    if (!userId || !addressId) {
      res.status(400).json({
        success: false,
        message: "Please provide all the required fields",
      });
    }

    const updateAddress = await Address.findOne(
      { userId, _id: addressId },
      FormData,
      { new: true }
    );

    if (!updateAddress) {
      res.status(404).json({
        success: false,
        message: "Address not found",
      })
    }

    res.status(200).json({
      success: true,
      message: "Address updated successfully",
      data: updateAddress,
    });


  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const deleteAddress = async (req, res) => {
  try {
          
    const { userId, addressId } = req.params;
    if (!userId || !addressId) {
      res.status(400).json({
        success: false,
        message: "Please provide all the required fields",
      })
    }

    const deleteAddress = await Address.findOneAndDelete({ userId, _id: addressId });

    if (!deleteAddress) {
      res.status(404).json({
        success: false,
        message: "Address not found",
      })
    }

    res.status(200).json({
      success: true,
      message: "Address deleted successfully",
      data: deleteAddress,
    });



  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { addAddress, fetchAddress, updateAddress, deleteAddress };
