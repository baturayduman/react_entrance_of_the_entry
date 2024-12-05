import React from "react";


export function Card({ children }) {
    return (
        <div
            style={{
                border: "1px solid",
                padding: "20px",
                borderRadius: "5px",
                background: "linear-gradient(to bottom,#289bd0,#f1f1f1)"
            }}
        >
            {children}
            <h1>Hello Card</h1>
        </div>


    )
}

export function Avatar({ person, size }) {  //child component
    return (
        <div>
            <img
                src={person.imageUrl}
                alt={person.imageAlt}
                width={size}
                height={size}
            />
        </div>
    )
}



export function Profile() {
    const person = {
        name: "baturay",
        age: 24,
        city: "izmir",
        imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHmOLsBPj3TVw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699649905837?e=2147483647&v=beta&t=nw9LMwDFvMzLHSr9dqoONRFp2g1gn2x7fLQJPEHYHjY",
        imageAlt: "BATURAY DUMAN"
    };

    return (
        <Card>
            <h1>PROFİLE</h1>
            <Avatar person={person} />
            xdxd
        </Card>
    );
}
