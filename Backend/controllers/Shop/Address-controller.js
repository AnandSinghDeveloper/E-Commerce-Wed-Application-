const Address = require("../../models/Address");

const addAddress = async (req, res) => {
  try {
    const {
      address,
      city,
      pincode,
      phone,
      notes,
      userId,
    } = req.body;
    if (!address || !city || !pincode || !phone || !notes || !userId) {
      res.status(400).json({
        success: false,
        message: "Please provide all the required fields",
      });
    }

    const Newaddress = new Address({
     
      address,
      city,     
      pincode,      
      phone,     
      notes,
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
    const formData = req.body;

    if (!userId || !addressId) {
      return res.status(400).json({
        success: false,
        message: "Please provide all the required fields",
      });
    }

    const updatedAddress = await Address.findOneAndUpdate(
      { userId, _id: addressId },
      formData,
      { new: true }
    );

    if (!updatedAddress) {
      return res.status(404).json({
        success: false,
        message: "Address not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Address updated successfully",
      data: updatedAddress,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
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
      });
    }

    const deleteAddress = await Address.findOneAndDelete({
      userId,
      _id: addressId,
    });

    if (!deleteAddress) {
      res.status(404).json({
        success: false,
        message: "Address not found",
      });
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
