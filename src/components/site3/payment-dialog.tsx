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
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Subscribe to {plan?.name}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label>Selected Plan</Label>
              <div className="flex justify-between items-baseline bg-gray-50 p-3 rounded-lg">
                <span className="text-gray-900">{plan?.name}</span>
                <div className="text-right">
                  <span className="text-lg font-bold text-gray-900">{plan?.price}</span>
                  <span className="text-gray-500 ml-1">{plan?.interval}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name on Card</Label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                required 
                className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="card">Card Number</Label>
              <Input 
                id="card" 
                placeholder="4242 4242 4242 4242" 
                required 
                className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input 
                  id="expiry" 
                  placeholder="MM/YY" 
                  required 
                  className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input 
                  id="cvc" 
                  placeholder="123" 
                  required 
                  className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-emerald-600 hover:bg-emerald-700"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </div>
            ) : (
              `Pay ${plan?.price}`
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 