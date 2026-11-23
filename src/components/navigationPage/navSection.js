import { html } from "../../package/events/index.js"
import { rebuildWebPages, useNavigation } from "../../package/router/router.js"

export const navPage = () => {

    const navigation = useNavigation()

    let clickHandler = () => {  
        alert("")
    }

    return (
    html`<div class="navigationHolder">
        <div class="navManagement"> Product List </div>
        <button id="Product" onclick=${ () => {
            // window.location.hash = "#/"
            // rebuildWebPages()
            navigation("/")
        } }> Product </button>
        <button id="AddProduct" onclick=${ () => {
            // window.location.hash = "#/create-product"
            // rebuildWebPages()        
            navigation("/create-product")
        } } > Add Product </button>
    </div> `
)
}



