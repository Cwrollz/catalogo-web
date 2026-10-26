import Link from "next/link";

export default function notFound(){
    return(
        <section className="text-center space-y-3">
            <h1 className="text-2x1 font-bold">Página não encontrada.</h1>
            <p>O conteúdo que você procura não existe ou foi removido</p>
            <Link href="/livros" className="text-blue-700 underline">Voltar para a lista</Link>
        </section>
    )
}