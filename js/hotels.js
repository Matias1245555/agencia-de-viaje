document.addEventListener('DOMContentLoaded', function() {
    const hotelForm = document.getElementById('hotel-form');
    const hotelResults = document.getElementById('hotel-results');

    const hotelesSimulados = [
        {
            id: 1,
            nombre: 'Hotel Paradiso',
            ubicacion: 'Cancun, Mexico',
            estrellas: 5,
            precio: 180,
            descripcion: 'Hotel frente al mar con playa privada'
        },
        {
            id: 2,
            nombre: 'Resort Caribe',
            ubicacion: 'Punta Cana, Rep. Dominicana',
            estrellas: 4,
            precio: 150,
            descripcion: 'All-inclusive con piscinas y restaurantes'
        },
        {
            id: 3,
            nombre: 'Hotel Cartagena Plaza',
            ubicacion: 'Cartagena, Colombia',
            estrellas: 4,
            precio: 120,
            descripcion: 'Ubicado en el centro historico'
        },
        {
            id: 4,
            nombre: 'Miraflores Inn',
            ubicacion: 'Lima, Peru',
            estrellas: 3,
            precio: 85,
            descripcion: 'Hotel boutique en el distrito de Miraflores'
        }
    ];

    if (hotelForm) {
        hotelForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const destino = document.getElementById('hotel-destino').value;
            const checkin = document.getElementById('hotel-checkin').value;
            const checkout = document.getElementById('hotel-checkout').value;

            mostrarHoteles(destino);
        });
    }

    function mostrarHoteles(destino) {
        if (!hotelResults) return;

        hotelResults.innerHTML = '';

        const hotelesFiltrados = hotelesSimulados.filter(hotel =>
            hotel.ubicacion.toLowerCase().includes(destino.toLowerCase())
        );

        const hotelesAMostrar = hotelesFiltrados.length > 0 ? hotelesFiltrados : hotelesSimulados;

        hotelesAMostrar.forEach(hotel => {
            const hotelElement = document.createElement('div');
            hotelElement.className = 'hotel-card';
            hotelElement.innerHTML = `
                <div class="hotel-info">
                    <h4>${hotel.nombre}</h4>
                    <p class="hotel-ubicacion">${hotel.ubicacion}</p>
                    <p class="hotel-descripcion">${hotel.descripcion}</p>
                    <div class="hotel-estrellas">
                        ${'★'.repeat(hotel.estrellas)}${'☆'.repeat(5 - hotel.estrellas)}
                    </div>
                </div>
                <div class="hotel-precio">
                    <p class="precio">$${hotel.precio} USD / noche</p>
                    <button class="btn-reservar-hotel" onclick="reservarHotel(${hotel.id}, '${hotel.nombre}', ${hotel.precio})">Reservar</button>
                </div>
            `;
            hotelResults.appendChild(hotelElement);
        });
    }

    window.reservarHotel = function(id, nombre, precio) {
        const confirmacion = confirm(`Confirmar reserva de hotel:\n\nHotel: ${nombre}\nPrecio: $${precio} USD por noche\n\nDesea continuar?`);
        if (confirmacion) {
            alert(`Reserva confirmada en ${nombre}!\n\nNumero de referencia: HT-${Date.now()}\n\nRecibira un correo de confirmacion.`);
        }
    };
});