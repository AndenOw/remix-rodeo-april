import type { MetaFunction } from "@remix-run/node"
import { LinkList } from "../components/LinkList"
import { Link } from "@remix-run/react"

export const meta: MetaFunction = () => {
    return [{ title: "Remix Rodeo" }, { name: "description", content: "Welcome to Remix Rodeo!" }]
}

export default function Index() {
    return (
        <>
            <div className="columns content">
                <div className="column">
                    <h3 className="title is-3">The Finest Grains</h3>
                    <p>Build a restaurant ordering app.</p>
                    <p>
                        Choose your favorite restaurant. Make up your own restaurant! Try to build
                        out as complete of a site as possible.
                    </p>
                    <p>
                        Leverage core concepts in Remix like{" "}
                        <a href="https://remix.run/docs/en/main/file-conventions/routes">
                            nested routes
                        </a>
                        ,{" "}
                        <a href="https://remix.run/docs/en/main/discussion/progressive-enhancement">
                            progressive enhancement
                        </a>{" "}
                        and{" "}
                        <a href="https://remix.run/docs/en/main/discussion/pending-ui">
                            optimistic UI
                        </a>{" "}
                        to make your app shine!
                    </p>
                    <h3 className="title is-3">Starting point</h3>
                    <p>Use Vite to compile your app. Everything else is up to you.</p>
                    <h4 className="title is-4">Options</h4>
                    <p>
                        This repo (Vite + Remix SPA) has been setup for instructional use but{" "}
                        <a href="https://github.com/remix-austin/remix-rodeo-april">
                            can also be forked
                        </a>{" "}
                        and used as a starter for your project.
                    </p>
                    <p>
                        A sample menu has been created at <Link to="menu">/menu</Link>. Feel free to
                        also use these additional assets:
                    </p>
                    <LinkList
                        items={[
                            {
                                label: "Menu JSON",
                                href: "https://github.com/remix-austin/remix-rodeo-april/blob/main/app/menu.json"
                            },
                            {
                                label: "Menu generator script",
                                href: "https://github.com/remix-austin/remix-rodeo-april/blob/main/generate-menu.js"
                            }
                        ]}
                    />
                </div>
            </div>
        </>
    )
}
