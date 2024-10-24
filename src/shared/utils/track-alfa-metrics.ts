interface TrackAlfaMetricsParams {
    action: string;
    category: string;
    label?: string;
    property?: string;
    value?: string;
}

export const trackAlfaMetrics = (params: TrackAlfaMetricsParams) => {
    const { category, action, label = null, property = null, value = null } = params;

    if (typeof window !== 'undefined' && typeof window.sp !== 'undefined') {
        window.sp('trackStructEvent', category, action, label, property, value);
    }
};
