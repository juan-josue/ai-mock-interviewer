import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";


const messages = [
  ["Mock Lab", "Your task is to implement a function to determine if a string of brackets is valid."],
  ["Mock Lab", "The input will only contain '(', ')', '{', '}', '[' and ']'. A string is valid if brackets close in the correct order."],
  ["Juan", "Got it. So I need to check if each opening bracket has a corresponding closing one, and they’re properly nested."],
  ["Mock Lab", "Exactly. You can assume the input string is non-empty."],
  ["Juan", "Okay, I’ll use a stack to keep track of opening brackets. When I see a closing one, I’ll check if it matches the top of the stack."],
];

type MessageProps = {
  sender: string;
  message: string;
};

function Message({ sender, message }: MessageProps) {
  const imgURL =
    sender === "Mock Lab"
      ? "https://github.com/shadcn.png"
      : "https://avatars.githubusercontent.com/u/66090832?v=4";

  return (
    <div className="flex justify-start items-start gap-2 w-full">
      <Avatar>
        <AvatarImage src={imgURL} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2 w-full text-sm">
        <div className="text-primary">{sender}{sender === "Mock Lab" ? <Badge variant="secondary" className="ml-2">Assistant</Badge> : ""}</div>
        <div className="text-neutral-500">{message}</div>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="flex flex-col w-3/12 p-4 bg-background">
      <div className="flex flex-col w-full gap-4 overflow-y-scroll">
        {messages.map( (msg, index) => {
          return <Message key={index} sender={msg[0]} message={msg[1]} />
        } )}
      </div>
    </div>
  );
}

export default Chat;
