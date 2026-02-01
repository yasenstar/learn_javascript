import { lusitana } from '@/app/ui/fonts'

export default async function Page() {
    // return <div><p>Dashboard Page created by Yasen, Hello World!</p></div>;
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div></div>
            <div></div>
        </main>
    );
}