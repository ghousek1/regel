import React from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const SelectDemo = () => (
  <Select.Root className="">
    
    <Select.Trigger className="flex flex-row items-center text-2xl bold 
    w-[20vh] bg-green-400" >
      <Select.Value placeholder="Regex Flags >" />
      {/* <Select.Icon className="text-red-500">
        <ChevronDownIcon />
      </Select.Icon> */}
    </Select.Trigger>



    <Select.Portal className="flex flex-row items-center text-2xl bold 
    w-[20vh] bg-green-400" >
      <Select.Content  >
        <Select.ScrollUpButton className="inline-block">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        
        <Select.Viewport className="inline-block">
          <Select.Group>
            <SelectItem value="global">global</SelectItem>
            <SelectItem value="ignore-case">ignorecase</SelectItem>
            <SelectItem value="reg3">reg3</SelectItem>
            <SelectItem value="reg4">reg4</SelectItem>
            <SelectItem value="reg5">reg5</SelectItem>
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <Select.Item 
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default SelectDemo;