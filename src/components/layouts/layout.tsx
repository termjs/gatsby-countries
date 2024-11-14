import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import "../../styles/styles.css";
import "../../styles/queries.css";

interface LayoutProps {
    children: ReactNode;
}

const Layout = (props: LayoutProps) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;