import { Label } from "@radix-ui/react-label";
import React from "react";
import { Input } from "../ui/input";
// import { SelectContent } from "../ui/select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
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
            onValueChange={(value) => {
              setFromdata({ ...Fromdata, [item.name]: value });
            }}
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={item.label} />
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
      <div className="flex flex-col w-full  p-5  gap-4">
        {Formcontorl.map((items) => {
          return (
            <div key={items.name} className="grid text-foreground  w-full gap-2">
              <Label className="text-sm mb-1 font-medium ">{items.label}</Label>
              {renderInput(items)}
            </div>
          );
        })}
      </div>
      <Button
        type="submit"
        className=" w-[90%] ml-5 "
        style={{ backgroundColor: color }}
      >
        {buttonText ? buttonText : "Submit"}
      </Button>
    </form>
  );
};

export default CommonFrom;
