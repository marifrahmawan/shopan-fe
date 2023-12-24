import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  TextQuote,
} from "lucide-react";
import { Toggle } from "../ui/toggle";
import { cn } from "@/utils/utils";

type IProps = {
  editor: Editor | null;
};

const TipTapToolbar = ({ editor }: IProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex w-fit gap-2 rounded-md border border-input bg-transparent p-1">
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold
          className={cn(
            "h-4 w-4",
            editor.isActive("bold") ? "stroke-[3px]" : "stroke-2",
          )}
        />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic
          className={cn(
            "h-4 w-4",
            editor.isActive("italic") ? "stroke-[3px]" : "stroke-2",
          )}
        />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough
          className={cn(
            "h-4 w-4",
            editor.isActive("strike") ? "stroke-[3px]" : "stroke-2",
          )}
        />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List
          className={cn(
            "h-4 w-4",
            editor.isActive("bulletList") ? "stroke-[3px]" : "stroke-2",
          )}
        />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered
          className={cn(
            "h-4 w-4",
            editor.isActive("orderedList") ? "stroke-[3px]" : "stroke-2",
          )}
        />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("blockquote")}
        onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <TextQuote
          className={cn(
            "h-4 w-4",
            editor.isActive("blockquote") ? "stroke-[3px]" : "stroke-2",
          )}
        />
      </Toggle>
    </div>
  );
};

export default TipTapToolbar;
