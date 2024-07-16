import {twMerge} from "tailwind-merge"

const Paragraph = ({
    className, 
    children,
    as: P = "h3"
}) => {
  return (
    <P className={twMerge("text-xl mb-3", className)}>
        {children}
    </P>
  )
}

export default Paragraph