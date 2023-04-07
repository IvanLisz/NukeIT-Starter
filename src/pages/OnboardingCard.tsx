import Link from "next/link";

interface IOnboardingCard {
    title: string;
    href: string;
    text: string;
}
const OnboardingCard = ({ title, href, text }: IOnboardingCard) => (
    <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
        href={href}
        target="_blank"
    >
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="text-lg">
            {text}
        </div>
    </Link>
)

export default OnboardingCard;