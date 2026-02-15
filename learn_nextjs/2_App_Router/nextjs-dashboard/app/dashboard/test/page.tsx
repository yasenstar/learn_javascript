export default function Page() {
    // Action
    async function create(formData: FormData) {
        'use server';

    }
    // Invoke action using 'action' attribute
    // return <p>Test Page</p>;
    return <form action={create}>FormDate</form>;
}