export default function({children,className=""}) {
    return <section className={`${className} px-6 w-full`}>
        {children}
    </section>
}