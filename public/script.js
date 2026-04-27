// Fetch products
fetch('/api/products')
  .then(res => res.json())
  .then(data => {
    const div = document.getElementById('productList');
    if (div) {
      div.innerHTML = data.map(p => `<p>${p.name} - ${p.price}</p>`).join('');
    }
  });

// Submit inquiry
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const inquiry = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    await fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inquiry)
    });

    alert('Inquiry submitted!');
  });
}
