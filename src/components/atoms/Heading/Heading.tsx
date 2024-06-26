import { tv } from 'tailwind-variants';

const heading = tv({
  base: 'font-bold uppercase pb-4',
  variants: {
    heading: {
      h1: 'text-3xl',
      h2: 'text-xl',
    },
  },
});

export const Heading = ({ variant, className, children, ...rest }: HeadingProps) => {
  const HtmlHeading = variant;

  return (
    <HtmlHeading
      {...rest}
      className={heading({ heading: variant, className })}
    >
      {children}
    </HtmlHeading>
  );
}

export interface HeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  variant: 'h1' | 'h2';
}
