interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  context?: string;
  bg?: string;
  color?: string;
  m?: string;
  py?: string;
  px?: string;
  w?: string;
  flex?: string;
  gap?: string;
  fontSize?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  context,
  bg,
  color,
  py,
  px,
  flex,
  m,
  w,
  onClick,
  fontSize,
  ...props
}: ButtonProps) => {
  return (
    <>
    <button
        type= "submit"
        onClick={onClick}
        className={`${bg || "bg-slate-50"} ${m || "mt-3"} ${py || "py-2"} ${
        px || "px-8"
        } rounded-full ${flex || "flex-col"} ${fontSize || "text-2xl"} ${color || "text-black"} hover:text-slate-500 ${
        w || "w-full"
        } font-semibold`}
        {...props}
    >
        {context}
    </button>
    </>
  );
};

export default Button;