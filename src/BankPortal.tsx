
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BankPortal() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      {/* Header with background image */}
      <header
        className="bg-cover bg-center text-white py-20 px-4"
        style={{ backgroundImage: "url('/header-bg.png')" }}
      >
        <div className="bg-black/50 p-6 rounded-xl max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-3">Banco Ejemplo</h1>
          <p className="text-base md:text-lg">Tu banca confiable en línea</p>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 py-12 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-blue-800 leading-snug">
          Bienvenido al portal en línea de nuestro banco
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Cuentas Personales</h3>
              <p className="text-sm text-blue-800 mb-4">
                Administra tu cuenta corriente, caja de ahorro o tarjetas desde un solo lugar.
              </p>
              <Button>Ver más</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Créditos y Préstamos</h3>
              <p className="text-sm text-blue-800 mb-4">
                Simula tu préstamo y accede a condiciones exclusivas para clientes online.
              </p>
              <Button>Simular</Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 text-center text-sm text-gray-500">
        © 2025 Banco Ejemplo. Todos los derechos reservados.
      </footer>
    </div>
  );
}
