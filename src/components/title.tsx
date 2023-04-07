"use client"

interface ITitle {
    children: string
}
const Title = ({ children }: ITitle) => (
    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        {children}
    </h1>
)

export { Title }
