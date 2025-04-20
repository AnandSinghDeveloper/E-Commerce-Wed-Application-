import React, { Fragment } from "react";
import { FiltersOptions } from "@/config/Config";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
const Fliter = ({ fliter, handleFliter }) => {
  return (
    <div className="bg-background rounded-md shadow-sm ">
      <div className="p-4 border-b border-gray-200">
        <h5 className="text-xl font-bold text-gray-900">Filters</h5>
      </div>
      <div className="p-4 space-y-4">
        {Object.keys(FiltersOptions).map((key, index) => (
          <Fragment>
            <div>
              <h3 className="text-lg font-medium text-gray-900" key={key.id}>
                 # {key}
              </h3>
              <div className="grid gap-2 mt-2">
                {FiltersOptions[key].map((item) => (
                  <Label
                    className=" flex gap-3 text-base font-medium items-center"
                    key={item.id}
                  >
                    <Checkbox
                      checked={
                        fliter &&
                        Object.keys(fliter).length > 0 &&
                        fliter[key] &&
                        fliter[key].indexOf(item.id) > -1
                      }
                      onCheckedChange={() => handleFliter(key, item.id)}
                    />
                    {item.label}
                  </Label>
                ))}
              </div>
            </div>
            <Separator />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Fliter;
