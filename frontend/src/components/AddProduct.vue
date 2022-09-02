<template>
  <div>
    <div class="field">
      <label class="label">Product Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="productName"
        />
      </div>
    </div>
  
    <div class="field">
      <label class="label">Price</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="productPrice"
        />
      </div>
    </div>
  
    <div class="control">
      <button class="button is-primary" @click="saveProduct">SAVE</button>
    </div>
    
    <br>
 <div class="control">
<div v-show="saved" class="notification is-success">
  <button class="delete"></button>
Product  <strong>{{ productPrice }}</strong> has been added successfully
</div>
</div>
</div>

</template>
  
<script>
// import axios
import axios from "axios";
  
export default {
  name: "AddProduct",
  data() {
    return {
      saved:false,
      productName: "",
      productPrice: "",
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/products", {
          product_name: this.productName,
          product_price: this.productPrice,
        });
        this.saved = true;
        this.productName = "";
        this.productPrice = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
  
<style>
</style>