import "./menu.css";

const ProdDesayuno = ({titulo, precio}) => {
    return (
        <article className="prodDesayuno">
            <img src="https://placehold.it/300x300" alt="Foto desayuno"/>
            <div>
                <h3>{titulo}</h3>
                <h3>${precio}</h3>
            </div>
        </article>
    )
}

export default ProdDesayuno;