function Home(){
    return(
        <>
        <h1>Hii {localStorage.getItem("name")}</h1>
        <h1>THis is the home page</h1>
        </>
    )
}
export default Home;