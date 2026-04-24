import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // Conteúdo do botão
  variant?: "cta" | "secondary" | "diferent"; // Exemplo de prop personalizada
}

export const Button = ({
  children,
  variant = "cta",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "text-background cursor-pointer rounded-md uppercase shadow-md transition-all duration-300 hover:shadow-2xl";
  const newStyle = {
    cta: "bg-primary  hover:scale-105 hover:brightness-105 px-14 py-4",
    secondary:
      "bg-muted/10 hover:bg-card/20 cursor-pointer border border-2 px-8 py-4 hover:scale-105 ",
    diferent:
      "bg-muted text-foreground hover:bg-card/30 border-muted cursor-pointer border border-2 px-8 py-4 hover:scale-105",
  };

  const variantStyles = newStyle[variant] || newStyle.cta;

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};
