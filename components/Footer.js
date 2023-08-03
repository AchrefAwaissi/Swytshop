import React from 'react'

const Footer = () => {
  return (
    <div><footer class="footer mt-auto py-3 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>À propos de nous</h5>
          <p>Swytshop est une marque de mode qui propose des vêtements et accessoires élégants et abordables. Nous croyons que tout le monde devrait pouvoir s'habiller avec style, sans se ruiner. Notre mission est de fournir à nos clients les dernières tendances à des prix abordables.</p>
        </div>
        <div class="col-md-4">
          <h5>Notre blog</h5>
          <ul class="list-unstyled">
            <li><a href="#">Dernières tendances</a></li>
            <li><a href="#">Astuces de style</a></li>
            <li><a href="#">Comment s'habiller pour une occasion spéciale</a></li>
            <li><a href="#">Comment assortir ses vêtements</a></li>
            <li><a href="#">Comment prendre soin de ses vêtements</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Nous contacter</h5>
          <ul class="list-unstyled">
            <li>Adresse : 123 Main Street, Anytown, CA 12345</li>
            <li>Téléphone : (123) 456-7890</li>
            <li>Email : info@swytshop.com</li>
          </ul>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 text-center">
          <p>Copyright &copy; 2023 Swytshop</p>
        </div>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer