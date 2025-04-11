import { Label } from "@radix-ui/react-label";
import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const CommonFrom = ({
  Formcontorl,
  Fromdata,
  setFromdata,
  onSubmit,
  buttonText,
  color,
}) => {
  const renderInput = (item) => {
    const cases = {
      INPUT: "input",
      SELECT: "select",
      TEXTAREA: "textarea",
    };

    let element = null;

    const value = Fromdata[item.name] || "";

    switch (item.componentType) {
      case cases.INPUT:
        element = (
          <Input
            name={item.name}
            placeholder={item.placeholder}
            type={item.type}
            id={item.name}
            value={value}
            onChange={(e) => {
              setFromdata({ ...Fromdata, [item.name]: e.target.value });
            }}
          />
        );

        break;

      case cases.SELECT:
        element = (
          <Select
            value={value}
            onValueChange={(value) =>
              setFromdata({ ...Fromdata, [item.name]: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={item.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {item.options && item?.options.length > 0
                ? item.options.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );

        break;

      case cases.TEXTAREA:
        element = (
          <Textarea
            name={item.name}
            placeholder={item.placeholder}
            id={item.name}
            value={value}
            onChange={(e) => {
              setFromdata({ ...Fromdata, [item.name]: e.target.value });
            }}
          />
        );

        break;

      default:
        element = (
          <Input
            name={item.name}
            placeholder={item.placeholder}
            type={item.type}
            id={item.name}
            value={value}
            onChange={(e) => {
              setFromdata({ ...Fromdata, [item.name]: e.target.value });
            }}
          />
        );
        break;
    }
    return element;
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col bg-transparent p-5  gap-4">
        {Formcontorl.map((item) => {
          return (
            <div key={item.name} className="grid  w-full gap-2">
              <Label className="text-sm mb-1 font-medium ">{item.label}</Label>
              {renderInput(item)}
            </div>
          );
        })}
      </div>
      <Button
        type="submit"
        className="mt-7 w-full"
        style={{ backgroundColor: color }}
      >
        {buttonText ? buttonText : "Submit"}
      </Button>
    </form>
  );
};

export default CommonFrom;
