function Lab() {
    const isLoggedIn: boolean = true;
    return(
        <div>
            {isLoggedIn ? <h2>AFRIN</h2> : <h2>Please Login</h2>}
        </div>
    );
}

export default Lab;