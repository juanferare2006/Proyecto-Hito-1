import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [descripcion, setDescripcion] = useState('')
  const [resultado, setResultado] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!descripcion.trim()) {
      setError('Por favor, ingresa una descripción de los síntomas')
      return
    }

    setLoading(true)
    setError(null)
    setResultado(null)

    try {
      const response = await axios.post('http://localhost:4000/api/classify', {
        descripcion: descripcion
      })
      
      setResultado(response.data)
    } catch (err) {
      setError(
        err.response?.data?.message || 
        err.message || 
        'Error al conectar con el servidor. Asegúrate de que el backend esté corriendo en el puerto 4000.'
      )
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setDescripcion('')
    setResultado(null)
    setError(null)
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>🏥 FarmaNova</h1>
          <p className="subtitle">Clasificación Automática de Solicitudes Médicas</p>
        </header>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="descripcion" className="label">
              Descripción de los síntomas:
            </label>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Ingresa la descripción de los síntomas del paciente..."
              className="textarea"
              rows="6"
              disabled={loading}
            />
          </div>

          <div className="button-group">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading || !descripcion.trim()}
            >
              {loading ? '⏳ Clasificando...' : '🔍 Clasificar solicitud'}
            </button>
            {(descripcion || resultado || error) && (
              <button 
                type="button" 
                onClick={handleClear}
                className="btn btn-secondary"
                disabled={loading}
              >
                Limpiar
              </button>
            )}
          </div>
        </form>

        {error && (
          <div className="alert alert-error">
            <strong>❌ Error:</strong> {error}
          </div>
        )}

        {resultado && (
          <div className="result-card">
            <h2 className="result-title">📋 Resultado de la Clasificación</h2>
            <div className="result-grid">
              <div className="result-item">
                <span className="result-label">Especialidad:</span>
                <span className="result-value especialidad">{resultado.especialidad}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Urgencia:</span>
                <span className={`result-value urgencia urgencia-${resultado.urgencia.toLowerCase()}`}>
                  {resultado.urgencia}
                </span>
              </div>
              <div className="result-item">
                <span className="result-label">Confianza:</span>
                <span className="result-value confianza">
                  {(resultado.confianza * 100).toFixed(1)}%
                </span>
              </div>
              <div className="result-item full-width">
                <span className="result-label">Mensaje:</span>
                <span className="result-value mensaje">{resultado.mensaje}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

