import {Page, NavController, Alert} from 'ionic-angular';

import {CartItem, CartService} from '../../services/menu-service';

@Page({
  templateUrl: 'build/pages/cart/cart.html'
})
export class CartPage {

    nav : NavController;
    cartList : Array<CartItem>;
    //cartService : CartService;

    constructor(nav: NavController, private cartService : CartService ){
        this.nav = nav;
        
        //this.cartService = cartService;
        
        this.cartList = cartService.getAllCartItems();
        
        //console.log(this.cartList);
    }
    
    getTotal(): number{
        return this.cartService.getGrandTotal();
    }
    
    removeItemFromCart(item){
        //this.cartService.removeItemById(item.id);
        
        let self = this;
        
        let alert = Alert.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to remove food item from cart?',
            buttons: [
            {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            },
            {
                text: 'Remove',
                handler: () => {
                    console.log('Buy clicked');                    
                    self.cartService.removeItemById(item.id);
                }
            }
            ]
        });
        this.nav.present(alert);
        
    }
    
    quantityPlus(item){
        this.cartService.quantityPlus(item);
    }
    
    quantityMinus(item){
        this.cartService.quantityMinus(item);
    }
    
    
    /*goToPage(page){
        this.nav.push(page, null, { animate: false });
    }*/
       
}
