export function InputBox({ label, placeholder, onChange, type = "text" }) {
    return (
      <div>
        <div className="text-sm font-medium text-left py-2">
          {label}
        </div>
        <div>
          <input
            type={type}
            placeholder={placeholder}
            className="w-full px-2 py-1 border rounded border-slate-200"
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
  