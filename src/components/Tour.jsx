import Card from "./Card";

const Tour = (props) => {
    function getId(id)
    {
        props.removeId(id);
    }
    return(
        <div>
            <h1>Make Your Dream True</h1>
            <div>
                {
                  props.tours.map((tour) => {
                   return <Card key={tour.id} tour = {tour} getRemoveId ={getId}/>
                  })
                }
            </div>
        </div>
    )
}
export default Tour;