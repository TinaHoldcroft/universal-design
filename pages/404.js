import BTN from '../components/btn';
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 115000)
    })

    return (
        <div className="not-found">
            <div>
            <img src='/woman-blind-outline.svg' alt='' />
            </div>
            <div>
                <h1>404</h1>
                <h2>This page does not exist</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                <BTN
                    value='Back to the frontpage'
                    link='/'
                />
            </div>
        </div>
    );
}

export default NotFound;