type LinkProps = {
  numero: number;
  calle?: string;
};

export const Link = ({ numero }: LinkProps) => (
  <div className="link">link {numero}</div>
);
