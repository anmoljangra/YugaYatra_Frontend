"use client";

import Image from "next/image";
import { Modal } from "@/components/ui/modal";
import { ShieldCheck, Download, ExternalLink } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  authority: string;
  status: string;
  image: string;
}

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateModal({ certificate, isOpen, onClose }: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={certificate.title} size="lg">
      <div className="p-6">
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Issuing Authority
            </p>
            <p className="text-sm font-medium text-slate-900 mt-0.5">{certificate.authority}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <ShieldCheck size={14} />
            {certificate.status} Document
          </span>
        </div>

        {/* Certificate Image Preview */}
        <div className="mt-4 relative w-full h-[480px] bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-contain"
          />
        </div>

        {/* Action Controls */}
        <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            Official public record registered with the Government of India.
          </p>
          <a
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            <ExternalLink size={14} />
            Open Original
          </a>
        </div>
      </div>
    </Modal>
  );
}
