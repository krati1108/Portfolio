const metricPattern =
  /(\$[\d.]+[MK]?|\b\d+(?:\.\d+)?(?:\+|–\d+)?%|\b\d+\+|\b\d+\s+(?:hours?|minutes?|tables?|teams?|stakeholders?|sources?|functions?|dashboards?|properties?|metrics?|profiles?|interactions?|models?|experiments?|sectors?|shipments?|miles?))/gi;

const HighlightMetrics = ({ children }) =>
  String(children).split(metricPattern).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={`${part}-${index}`} className="font-black text-teal-200">
        {part}
      </strong>
    ) : (
      part
    )
  );

export default HighlightMetrics;
