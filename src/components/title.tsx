import { cn } from "./lib/utils"

interface ITitle {
    className: string;
    children: string;
}
const Title = ({ className, children }: ITitle) => (
    <h1 className={cn("text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]", className)}>
        {children}
    </h1>
)

export { Title }
