import { Button, Input, Textarea } from "@nextui-org/react"



export default function Contact() {
    return (
        <>
            <section id="3">
                <div>

                    <div className=" flex flex-col justify-center items-center">
                        <h1 className=" text-[48px] font-bold">Contact</h1>
                        <div className=" w-[100px] h-[4px] bg-yellow flex justify-center " ></div>
                    </div>
                    <form action="" method="POST" className=" max-w-md mx-auto space-y-5">
                        <div className=" space-y-3">
                            <label htmlFor="Name" className=" text-base font-semibold">Name</label>
                            <Input isRequired type="Name" radius="lg" defaultValue="" className=" text-base " placeholder="Name..." required />
                        </div>
                        <div className=" space-y-3">
                            <label htmlFor="Name" className=" text-base font-semibold">Email</label>
                            <Input isRequired type="Email" radius="lg" defaultValue="" className=" text-base " placeholder="Email..." required />
                        </div>
                        <div>
                        <label htmlFor="Name" className=" text-base font-semibold">Email</label>
                            <Textarea isRequired type="Email" defaultValue="" className=" text-base "  > </Textarea>
                        </div>
                        <div className=" flex justify-end ">
                            <Button  className=" w-[89px] h-[43px] rounded-lg bg-yellow text-lg font-medium">Send</Button>
                        </div>
                        


                    </form>


                </div>
            </section>
        </>
    )
}