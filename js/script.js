// Lista de produtos
const produtos = [
    {
      nome: "Sapato Muy Bella",
      descricao: "Livre leve e solto e macio",
      imagem: "images/shoes.jpg",
      linkWhatsApp: "https://wa.me/31973539925?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Produto%201"
    },
    {
      nome: "Tamanco suplise",
      descricao: "Charme fora do comum com este aspecto elegante",
      imagem: "images/shoes2.jpg",
      linkWhatsApp: "https://wa.me/31973539925?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Produto%202"
    },
    {
        nome: "Salto tototi",
        descricao: "Ideal para festas e comemorações",
        imagem: "images/shoes3.jpg",
        linkWhatsApp: "https://wa.me/31973539925?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Produto%202"
      },
      {
        nome: "Avenida Brasil",
        descricao: "Aquele look de cair o queijo.",
        imagem: "images/shoes4.jpg",
        linkWhatsApp: "https://wa.me/31973539925?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Produto%202"
      }
  ];
  
  // Função para gerar os produtos no HTML
  function carregarProdutos() {
    const productList = document.getElementById('product-list');
    
    produtos.forEach(produto => {
      const productCard = `
        <div class="col-md-4 product-card">
          <div class="card">
            <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
            <div class="card-body product-info">
              <h5 class="card-title">${produto.nome}</h5>
              <p class="card-text">${produto.descricao}</p>
              <a href="${produto.linkWhatsApp}" target="_blank" class="btn btn-success">
                <i class="fab fa-whatsapp"></i> Comprar via WhatsApp
              </a>
            </div>
          </div>
        </div>
      `;
      productList.innerHTML += productCard;
    });
  }
  
  // Carrega os produtos ao carregar a página
  window.onload = carregarProdutos;
  