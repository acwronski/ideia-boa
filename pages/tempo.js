function Tempo(props) {
    console.log('>Passando pelo frontend;');
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (Dinamico)</div>

            <div>{props.staticDateString} (estatico)</div>
        </div>
    )
}

export async function getStaticProps() {
    console.log('>Passando pelo getStaticProps();');
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props:{
            staticDateString
        },
        revalidate: 1
    }
}

export default Tempo;