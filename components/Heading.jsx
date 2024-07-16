import {twMerge} from "tailwind-merge"

const Heading = ({
    className, 
    children,
    as: Tag = "h2"
}) => {
  return (
    <Tag className={twMerge("text-3xl font-bold mb-5", className)}>
        {children}
    </Tag>
  )
}

export default Heading