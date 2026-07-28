document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const resultadosSection = document.getElementById('resultados');
    const resultadosLista = document.getElementById('resultados-lista');

    const vuelosSimulados = [
        {
            id: 1,
            aerolinea: 'Aerolineas Mexicanas',
            origen: 'Ciudad de Mexico',
            destino: 'Cancun',
            fecha: '2026-08-15',
            precio: 450,
            duracion: '2h 30min',
            tipo: 'economy'
        },
        {
            id: 2,
            aerolinea: 'Vuelos Express',
            origen: 'Ciudad de Mexico',
            destino: 'Cancun',
            fecha: '2026-08-15',
            precio: 520,
            duracion: '2h 15min',
            tipo: 'economy'
        },
        {
            id: 3,
            aerolinea: 'Aerolineas del Caribe',
            origen: 'Ciudad de Mexico',
            destino: 'Punta Cana',
            fecha: '2026-08-15',
            precio: 680,
            duracion: '4h 00min',
            tipo: 'business'
        },
        {
            id: 4,
            aerolinea: 'Vuelos Sudamericanos',
            origen: 'Ciudad de Mexico',
            destino: 'Lima',
            fecha: '2026-08-15',
            precio: 550,
            duracion: '4h 30min',
            tipo: 'economy'
        },
        {
            id: 5,
            aerolinea: 'Aerolineas Colombianas',
            origen: 'Ciudad de Mexico',
            destino: 'Cartagena',
            fecha: '2026-08-15',
            precio: 490,
            duracion: '3h 45min',
            tipo: 'economy'
        },
        {
            id: 6,
            aerolinea: 'Aerolineas Premium',
            origen: 'Ciudad de Mexico',
            destino: 'Cancun',
            fecha: '2026-08-15',
            precio: 890,
            duracion: '2h 10min',
            tipo: 'business'
        }
    ];

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const origen = document.getElementById('origen').value;
        const destino = document.getElementById('destino').value;
        const fechaIda = document.getElementById('fecha-ida').value;

        mostrarLoading();

        setTimeout(() => {
            const resultadosFiltrados = vuelosSimulados.filter(vuelo =>
                vuelo.origen.toLowerCase().includes(origen.toLowerCase()) ||
                vuelo.destino.toLowerCase().includes(destino.toLowerCase())
            );

            mostrarResultados(resultadosFiltrados.length > 0 ? resultadosFiltrados : vuelosSimulados);
        }, 1000);
    });

    function mostrarLoading() {
        resultadosLista.innerHTML = '<div class="loading">Buscando vuelos disponibles...</div>';
        resultadosSection.classList.remove('hidden');
    }

    function mostrarResultados(vuelos) {
        resultadosLista.innerHTML = '';

        if (vuelos.length === 0) {
            resultadosLista.innerHTML = '<div class="no-resultados">No se encontraron vuelos para esta busqueda.</div>';
            return;
        }

        vuelos.sort((a, b) => a.precio - b.precio);

        vuelos.forEach(vuelo => {
            const vueloElement = document.createElement('div');
            vueloElement.className = 'resultado-item';
            vueloElement.innerHTML = `
                <div class="resultado-info">
                    <h4>${vuelo.aerolinea}</h4>
                    <p>${vuelo.origen} → ${vuelo.destino}</p>
                    <p>Fecha: ${vuelo.fecha} | Duracion: ${vuelo.duracion}</p>
                    <span class="badge badge-${vuelo.tipo}">${vuelo.tipo === 'business' ? 'Business' : 'Economy'}</span>
                </div>
                <div class="resultado-precio">
                    <p class="precio">$${vuelo.precio} USD</p>
                    <button class="btn-reservar" onclick="reservarVuelo(${vuelo.id}, '${vuelo.aerolinea}', ${vuelo.precio})">Reservar</button>
                </div>
            `;
            resultadosLista.appendChild(vueloElement);
        });

        resultadosSection.scrollIntoView({ behavior: 'smooth' });
    }

    window.reservarVuelo = function(id, aerolinea, precio) {
        const confirmacion = confirm(`Confirmar reserva:\n\nAerolinea: ${aerolinea}\nPrecio: $${precio} USD\n\nDesea continuar?`);
        if (confirmacion) {
            alert(`Reserva confirmada con ${aerolinea}!\n\nNumero de referencia: VJ-${Date.now()}\n\nRecibira un correo de confirmacion.`);
        }
    };

    const fechaIdaInput = document.getElementById('fecha-ida');
    const fechaVueltaInput = document.getElementById('fecha-vuelta');

    fechaIdaInput.addEventListener('change', function() {
        fechaVueltaInput.min = this.value;
    });
});