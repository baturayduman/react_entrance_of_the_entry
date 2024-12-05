





export default function Button({ children, renkak = "pink", width = 200, height = 200, }) {

    return (

        <button
            style={{
                backgroundColor: renkak,
                width: `${width}px`,   // template literal için doğru kullanım
                height: `${height}px`, // template literal için doğru kullanım

            }}

        >

            {children}
        </button>

    )
}









