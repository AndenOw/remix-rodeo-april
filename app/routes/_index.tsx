import type { MetaFunction } from "@remix-run/node"
import { LinkList } from "../components/LinkList"
import { Link } from "@remix-run/react"

export const meta: MetaFunction = () => {
    return [{ title: "Remix Rodeo" }, { name: "description", content: "Welcome to Remix Rodeo!" }]
}

export default function Index() {
    return (
        <>
            <h1 className="title is-1">Indulge in Oatopia</h1>
            <h3>At Only Oatmeal, we believe in starting your day right, with wholesome, hearty, and delicious oatmeal creations that will leave you feeling energized and satisfied.</h3>
            <br />
            <div className="columns content">
                <div className="column">
                    <h3 className="title is-3">Why Choose Only Oatmeal?</h3>
                    <ul>
                        <li>Fresh Ingredients: We source only the finest ingredients to ensure every bowl of oatmeal is packed with nutrition and flavor.</li>
                        <li>Customization: Build your own oatmeal masterpiece with our wide selection of toppings, fruits, nuts, and more.</li>
                        <li>Health Benefits: Oats are known for their numerous health benefits, from promoting heart health to boosting energy levels.</li>
                        <li>Fast & Convenient: Whether you're on-the-go or taking a leisurely breakfast break, Oatopia caters to your schedule.</li>
                    </ul>
                </div>
            </div>
            <Link className="title is-4 revolution" to="menu">Join the Oatmeal Revolution!</Link>
        </>
    )
}
