'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface PaymentDialogProps {
  isOpen: boolean
  onClose: () => void
  plan: {
    name: string
    price: string
    interval: string
  } | null
}

export function PaymentDialog({ isOpen, onClose, plan }: PaymentDialogProps) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoading(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white p-0">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-medium text-gray-900">
              Complete your purchase
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-baseline">
                <span className="text-gray-600">{plan?.name}</span>
                <div>
                  <span className="text-lg font-medium text-gray-900">{plan?.price}</span>
                  <span className="text-gray-500 ml-1">{plan?.interval}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="you@company.com" 
                  required 
                  className="mt-1 border-gray-200"
                />
              </div>

              <div>
                <Label htmlFor="card" className="text-gray-700">Card number</Label>
                <Input 
                  id="card" 
                  placeholder="1234 1234 1234 1234" 
                  required 
                  className="mt-1 border-gray-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry" className="text-gray-700">Expiry</Label>
                  <Input 
                    id="expiry" 
                    placeholder="MM/YY" 
                    required 
                    className="mt-1 border-gray-200"
                  />
                </div>
                <div>
                  <Label htmlFor="cvc" className="text-gray-700">CVC</Label>
                  <Input 
                    id="cvc" 
                    placeholder="123" 
                    required 
                    className="mt-1 border-gray-200"
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-black hover:bg-gray-800 text-white rounded-full"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Processing...</span>
                </div>
              ) : (
                `Pay ${plan?.price}`
              )}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
} 