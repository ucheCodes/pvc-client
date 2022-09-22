<script setup lang="ts">
function Alert() {
  alert("Unauthorized access!!! You do not have the privileges to use this. ");
}
</script>
<template>
  <div class="row">
    <div class="col-2">
      <h2 class="title">Register Political Aspirant</h2>
      <div class="form-container admin">
          <form onsubmit="event.preventDefault()">
          <select name="category" id="category">
          <option value="presidential">Select Type of election</option>
          <option value="presidential">Presidential</option>
          <option value="state">State</option>
          <option value="local">Local</option>
          <option value="gorvernorship">Gorvernorship</option>
        </select>
        <select name="category" id="category">
            <option value="abia">Select Election Category</option>
            <option value="abia">Abia</option>
            <option value="abia">Adamawa</option>
            <option value="abia">Anambra</option>
            <option value="abia">Bauchi</option>
          </select>
        <select name="category" id="category">
              <option value="apc">Select Election political party</option>
              <option value="apc">Apc</option>
              <option value="apc">Pdp</option>
              <option value="apc">Lp</option>
              <option value="apc">Prp</option>
        </select>
              <input type="text" placeholder="Enter Aspirant's name here">
              <input type="text" placeholder="Aspirant's Mobile number">
              <input type="email" placeholder="Aspirant's email">
              <input type="text" placeholder="Aspirant's NIN">
              <input type="text" placeholder="Aspirant's political purpose">
              <button class="btn" type="submit">Submit</button>
          </form>
      </div>
    </div>
    <div class="col-2">
      <h2 class="title">Add a new Election category</h2>
      <div class="form-container">
          <form onsubmit="event.preventDefault()">
              <input type="text" placeholder="Enter Election category name">
              <input type="date" placeholder="Enter election start date">
              <input type="date" placeholder="Enter election end date">
              <button class="btn" type="submit">Submit</button>
          </form>
      </div>
    </div>
  </div>
</template>
