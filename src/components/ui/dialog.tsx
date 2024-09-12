import * as RadixDialog from '@radix-ui/react-dialog';
import { XCircle } from 'lucide-react';
import React from 'react';
import { Button } from './button';
import { Input } from './input';

interface DialogProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  messageClose: string;
  formFields?: Array<{
    label: string;
    type: string;
    placeholder: string;
  }>
}

export const Dialog = (props: DialogProps) => {
  return (
  <RadixDialog.Root>
    <RadixDialog.Trigger>
    {props.children}
    </RadixDialog.Trigger>
    <RadixDialog.Portal>
      <RadixDialog.Overlay />
      <RadixDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <RadixDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          {props.title}
        </RadixDialog.Title>
        <RadixDialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          {props.description}
        </RadixDialog.Description>
        {props.formFields && props.formFields.map((field, index) => (
          <fieldset key={index} className="mb-[15px] flex items-center gap-5">
            <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="name">
              {field.label}
            </label>
            <Input type={field.type} placeholder={field.placeholder}></Input>
          </fieldset>
        ))}
        <div className="mt-5 flex justify-end">
          <RadixDialog.Close asChild>
            <Button>{props.messageClose}</Button>
          </RadixDialog.Close>
        </div>
        <RadixDialog.Close asChild>
          <Button variant='primary' size='small' iconOnly className='absolute top-2 right-2'>
            <XCircle size={20}/>
          </Button>
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  </RadixDialog.Root>
  )
};
