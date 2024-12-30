'use client'

import { createAlbum } from "@/actions/create-album";
import { useActionState, useEffect, useState } from "react";
import {Button} from "@nextui-org/button";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import {Form} from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import { toast } from "react-toastify";

export default function AlbumPopover() {
  const [formState, action] = useActionState(createAlbum, { errors: {} });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (formState.success) {
      setIsOpen(false);
      formState.success = false;
      toast.success("Album added");
    }
  }, [formState]);

  return (
    <Popover placement="bottom" isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <PopoverTrigger>
        <Button className="min-h-[40px]" color="warning">Add Album</Button>
      </PopoverTrigger>
      <PopoverContent className="p-4">
        <Form action={action} className="gap-4">
          <Input 
            label="Spotify Link"
            labelPlacement="outside"
            isRequired
            name="link"
            placeholder="Album link"
            isInvalid={!!formState.errors.link}
            errorMessage={formState.errors.link}
          />
          <Button color="primary" type="submit">Save</Button>
          {
            formState.errors._form &&
            <div className="rounded p-2 bg-red-200 border border-red-400">
              {formState.errors._form.join(', ')}
            </div>
          }
        </Form>
      </PopoverContent>
    </Popover>
  )
}