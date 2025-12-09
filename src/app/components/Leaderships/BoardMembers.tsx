import { Poppins } from "next/font/google"
import Image from "next/image"

interface BoardMember {
    name: string
    position: string
    image: string
}

const pop = Poppins({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
})

const popp = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const boardMembers: BoardMember[] = [
    {
        name: "Viveka Mandal",
        position: "Founder & CEO",
        image: "/Leadership/senior/mcansey-sr-2.png?height=400&width=400",
    },

    {
        name: "Deven",
        position: "Founder & CMO",
        image: "/Leadership/senior/mcansey-sr-1.png?height=400&width=400",
    },


    {
        name: "Siddnath Verma",
        position: "Founder & COO",
        image: "/Leadership/senior/Siddnath Verma.jpeg?height=400&width=400",
    },
]

export default function BoardMembers() {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-[#FAFAFA]">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <h2 className={`text-2xl md:text-3xl font-bold text-center mb-12 ${pop.className} `}>Our Board Member</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {boardMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 bg-[#EBEBEB] rounded-sm"
                        >
                            <div className="relative w-40 h-40 mb-4">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div className={`bg-white p-1 px-8 rounded-md ${popp.className}`}>
                                <h3 className="text-sm md:text-base font-semibold text-center mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-muted-foreground text-xs md:text-sm text-center">
                                    {member.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

