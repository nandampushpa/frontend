
import React from 'react'

const Home = () => {
  return (
    <div>
     <img src="/img1.avif" className="img-fluid w-100 pt-1" alt="..."/>
     <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div className="col">
    <div className="card h-100 d-flex flex-column">
      <img src="/ing2.avif" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Chiken</h5>
        <p className="card-text">Chicken is a versatile and delicious dish that can be prepared in many ways. To make a simple chicken recipe, marinate chicken pieces with spices, yogurt, and lemon juice for extra flavor. Cook it by frying, grilling, or baking until golden brown and tender. Serve hot with rice, roti, or salad for a tasty and satisfying meal.</p>
        <div className="my-3">
          <button className="btn btn-primary mx-5">Save
            </button>
            <button className="btn btn-warning mx-3">View More

            </button>
        </div>
      </div>
      </div>
   </div>
  <div className="col">
    <div className="card h-100 d-flex flex-column">
      <img src="/img3.avif" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Upma</h5>
        <p className="card-text">Upma is a popular South Indian breakfast dish made from semolina (rava). To prepare upma, roast semolina until golden brown and set aside. In a pan, heat oil, add mustard seeds, curry leaves, green chilies, and chopped onions. Sauté until onions turn soft, then add water and salt. Once the water starts boiling, slowly add the roasted semolina while stirring continuously to avoid lumps. Cook until the mixture thickens and becomes soft. Garnish with coriander leaves and serve hot with chutney or pickle.</p>
        <div className="my-3">
          <button className="btn btn-primary mx-3">Save
            </button>
            <button className="btn btn-warning mx-3">View More

            </button>
        </div>
      </div>
    </div>
  </div>
  <div className="col h-20 w-20">
    <div className="card h-100 d-flex flex-column">
      <img src="/img4.avif" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Bryani</h5>
        <p className="card-text">Biryani is a flavorful and aromatic rice dish made with basmati rice, spices, and marinated meat or vegetables. To prepare biryani, marinate chicken or mutton with yogurt, ginger-garlic paste, spices, and lemon juice. Cook partially boiled basmati rice with whole spices like cardamom, cloves, and bay leaves. In a large pot, layer the marinated meat and rice, adding fried onions, saffron milk, and ghee for extra flavor. Cover and cook on low heat (dum) until the meat is tender and the rice absorbs all the flavors. Serve hot with raita and salad.</p>
        <div className="my-3">
          <button className="btn btn-primary mx-3">Save
            </button>
            <button className="btn btn-warning mx-3">View More

            </button>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 d-flex flex-column">
      <img src="/img5.avif" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Vada</h5>
        <p className="card-text">Vada is a crispy and delicious South Indian snack made from urad dal (black gram). To prepare vada, soak urad dal for a few hours and grind it into a smooth batter with minimal water. Add chopped onions, green chilies, curry leaves, salt, and black pepper. Mix well and shape the batter into small doughnut-like rings. Deep fry in hot oil until golden brown and crispy. Serve hot with coconut chutney and sambar for a tasty and traditional treat.</p>
        <div className="my-3">
          <button className="btn btn-primary mx-3">Save
            </button>
            <button className="btn btn-warning mx-3">View More

            </button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
