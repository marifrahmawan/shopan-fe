import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TipTapToolbar from "./TipTapToolbar";

type IProps = {
  fieldName: string;
  onChange: (richText: string) => void;
};

const TipTap = ({ fieldName, onChange }: IProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    content: fieldName,
    editorProps: {
      attributes: {
        class:
          "rounded-md mt-5 border min-h-[150px] max-h-[300px] max-w-[900px] border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 overflow-y-scroll",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });
  return (
    <div className="flex max-h-fit flex-col">
      <TipTapToolbar editor={editor} />
      <EditorContent editor={editor} className="h-fit" />
    </div>
  );
};

export default TipTap;
